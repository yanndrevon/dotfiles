#!/usr/bin/env bash
# Bootstrap script for a fresh Arch-based (pacman) install.
#
# Usage:
#   git clone https://github.com/yanndrevon/dotfiles.git ~/dotfiles
#   cd ~/dotfiles
#   ./install.sh

set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v pacman >/dev/null 2>&1; then
  echo "This script only supports Arch-based distros (pacman not found)." >&2
  exit 1
fi

# Available directly from the official repos.
PACMAN_PACKAGES=(
  stow
  herdr
  ghostty
  starship
  fzf
  yazi
  ripgrep
  fd
  zoxide
)

# Only available in the AUR.
AUR_PACKAGES=(
  blesh-git
)

# Directories in this repo to symlink into $HOME via stow.
STOW_PACKAGES=(
  bash
  fonts
  ghostty
  herdr
  jetbrains
  starship
  teradici
)

install_yay() {
  if command -v yay >/dev/null 2>&1; then
    return
  fi
  echo "==> Installing yay (AUR helper)"
  sudo pacman -S --needed --noconfirm base-devel git
  local tmp
  tmp="$(mktemp -d)"
  git clone https://aur.archlinux.org/yay.git "$tmp/yay"
  (cd "$tmp/yay" && makepkg -si --noconfirm)
  rm -rf "$tmp"
}

echo "==> Installing official packages"
sudo pacman -S --needed --noconfirm "${PACMAN_PACKAGES[@]}"

install_yay

echo "==> Installing AUR packages"
yay -S --needed --noconfirm "${AUR_PACKAGES[@]}"

echo "==> Stowing dotfiles into $HOME"
cd "$DOTFILES_DIR"
for pkg in "${STOW_PACKAGES[@]}"; do
  if ! stow -v -t "$HOME" "$pkg"; then
    echo "!! Failed to stow '$pkg' - a conflicting file probably already exists in \$HOME." >&2
    echo "   Back it up/remove it, then re-run: stow -v -t \"$HOME\" $pkg" >&2
    echo "   (or use 'stow --adopt' to pull the existing file into the repo instead)" >&2
  fi
done

echo "==> Done. Start a new shell (or 'exec bash') to pick up the changes."
