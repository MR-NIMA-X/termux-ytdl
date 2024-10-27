const ytdl = require('@abrucci/ytdl-core');

module.exports.getYtDl = async (link) => {
  try {
    const info = await ytdl.getInfo(link);
    const title = info.videoDetails.title;
    const duration = info.videoDetails.lengthSeconds;
    const views = info.videoDetails.viewCount;
    const channel = info.videoDetails.ownerChannelName;
    const dl_links = info.formats.map(mrnima => ({
      quality: mrnima.qualityLabel,
      url: mrnima.url,
      mimeType: mrnima.mimeType
    }));

    return {
      title,
      duration,
      views,
      channel,
      dl_links
    };

  } catch (error) {
    console.error(error);
  }
};