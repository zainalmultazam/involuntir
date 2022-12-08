import axios from "axios";
import { API_URL } from "config/api";

/**
 * IsExistGalangdana is an async function that takes in three parameters: slug, setExist, and
 * setLoading. It then tries to make a GET request to the API_URL + "/api/galangdana/isExist/" + slug.
 * If the request is successful, it sets the value of setExist to the response.data.isExist. If the
 * request fails, it sets the value of setExist to false. Finally, it sets the value of setLoading to
 * false.
 * @param slug - the slug that you want to check
 * @param setExist - a function that sets the state of the component
 * @param setLoading - a function that sets the loading state to true or false
 */
const isExistGalangdana = async (slug, setExist, setLoading) => {
  try {
    const response = await axios.get(
      API_URL + "/api/galangdana/isExist/" + slug
    );
    setExist(response.data.isExist);
  } catch (err) {
    setExist(false);
  }
  setLoading(false)
}

export default isExistGalangdana;