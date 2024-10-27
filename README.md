
# Termux YouTube Downloader (YTDL)
A simple and efficient YouTube downloader built for Termux using Node.js and ytdl-core. This tool allows you to download videos or extract audio directly from YouTube, with customizable options for quality and format. It also provides detailed information about the video, such as the title, duration, views, and channel name.

### Features:
- Download YouTube videos in both MP4 and MP3 formats.
- Automatically fetch and display video details (title, duration, views, channel).
- Customizable output quality for both video and audio.
- Multi-language support (English and Sinhala).
- Easy command-line interface (CLI) integration.
- Written in Node.js with asynchronous support for smooth performance.
- Fully compatible with Termux on Android.

### How to use: 
1. Download termux app , open app and give storage permission.
```bash
termux-setup-storage
```  
2. Update packages.
```bash
pkg update && pkg upgrade
```
3. Install Git.
```bash
pkg install git
```
4. Install node.js
```bash
pkg install nodejs-lts
```
5. Clone this repository and open.
```bash
git clone https://github.com/MR-NIMA-X/termux-ytdl.git && cd termux-ytdl
```
6. Install Dependencies.
```bash
npm install
```
7. Download tiktok video using link
```bash
node down < youtube link >
```
Example download video: 
```bash
node down https://youtu.be/3H3gKSi1wrw?si=BDiuBQ_fg29sukR1
```

#### Image.
![image](https://github.com/user-attachments/assets/6661f478-de03-4bc5-b87d-e4f98396e8ac)

