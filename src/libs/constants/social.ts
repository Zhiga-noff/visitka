import telegram from 'assets/image/social/telegram.png';
import rutube from 'assets/image/social/rutube.png';
import odnk from 'assets/image/social/odnoklassniki.png';
import vk from 'assets/image/social/vk.png';
import dzen from 'assets/image/social/dzen.png';
import vkVideo from 'assets/image/social/vk-video.png';

export const listSocial = [
  {
    title: 'Telegram',
    link: '#',
    img: telegram.src,
  },
  {
    title: 'Rutube',
    link: '#',
    img: rutube.src,
  },
  {
    title: 'Одноклассники',
    link: '#',
    img: odnk.src,
  },
  {
    title: 'VK',
    link: '#',
    img: vk.src,
  },
  {
    title: 'Дзен',
    link: '#',
    img: dzen.src,
  },
  {
    title: 'VK Видео',
    link: '#',
    img: vkVideo.src,
  },
] as const;
