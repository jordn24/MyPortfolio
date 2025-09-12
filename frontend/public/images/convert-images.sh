
#!/bin/bash

# Convert all PNGs in this folder to multiple WebP sizes
for file in *.png; do
  filename="${file%.png}"
  
  echo "Converting $file ..."

  # 400px wide
  cwebp "$file" -resize 400 0 -q 80 -o "${filename}-400.webp"

  # 800px wide
  cwebp "$file" -resize 800 0 -q 80 -o "${filename}-800.webp"

  # 1200px wide
  cwebp "$file" -resize 1200 0 -q 80 -o "${filename}-1200.webp"
done

echo "✅ All images converted!"

