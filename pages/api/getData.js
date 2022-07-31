

export const getAllData = async () =>
{
  return await fetch('https://www.omdbapi.com/?s=boy&apikey=76e4e40&type=movie')
}

export const getOneData = async (imdbID) =>
{
  return await fetch(`http://www.omdbapi.com/?t=${imdbID}&apikey=76e4e40&plot=full`)
}