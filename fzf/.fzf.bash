# Setup fzf
# ---------
if [[ ! "$PATH" == */home/ydrevon/.fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}/home/ydrevon/.fzf/bin"
fi

eval "$(fzf --bash)"
