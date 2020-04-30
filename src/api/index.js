import axios from "axios";

// https://staging.fieldpros.co/thirdparty/trulia/search/address/plano%20tx/FOR_SALE

const endpoint =
  "https://staging.fieldpros.co/thirdparty/trulia/search/address/";

export default {
  searchTrulia: async (address, searchType = "FOR_SALE") =>
    await axios
      .get(endpoint + address + "/" + searchType)
      .then((result) => result.data)
      .catch((e) => e),
};
