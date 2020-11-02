% Load and find blue.
img = imread('NavBar1.gif');
BW = logical(img);
L = bwlabel(BW, 4);

% Build the three components:
Red   = uint8(255*double(L~=1).*double(img));
Green = uint8(255*double(L~=1).*double(img));
Blue  = uint8(255*double(L==1) + 255*double(img).*(L~=1));

true_color = cat(3, Red, Green, Blue);
figure(1), image(true_color);
axis image

imwrite(true_color, 'blueImg.png'); 