export const convertToMinutes = (seconds) => {
    /* Округляю минут */
    const minutes = Math.floor(seconds / 60)
    /* округляю секунды */
    const remainingSeconds = Math.floor(seconds % 60)

    return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`
}