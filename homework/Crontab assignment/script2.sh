folder_name=$(date +%Y-%m-%d)
mkdir -p "$folder_name"

file_name=$(date +%Y-%m-%d_%H-%M-%S)
touch "$folder_name/$file_name.txt"

