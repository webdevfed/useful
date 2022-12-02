from os import listdir
from os import path
import base64

parent_dir_path = path.abspath(".")

content_list = listdir(parent_dir_path)

# ---- get paths to .png files ----
images_paths = []

for file_name in content_list:
    if ".png" in file_name:
        path = parent_dir_path + "\\" + file_name
        images_paths.append(path)

data_uri_header = "data:image/png;base64,"

# ---- generate .txt paths ----
# map method, lambda version
# map != list
text_paths_map = map(lambda path: path.replace(".png", ".txt"), images_paths)
text_paths = list(text_paths_map)

for index, image_path in enumerate(images_paths):
    # read png file contents
    with open(image_path, 'rb') as f:
        data = f.read()
        string_64_bytes = base64.b64encode(data)
        # convert bytestring to UTF-8 string
        string_64 = string_64_bytes.decode(encoding="utf-8")
        with open(text_paths[index], "w") as w:
            # write to corresponding text file
            w.write(data_uri_header + string_64)
