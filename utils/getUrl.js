import JsonDataReader from './jsonReader';
class GetUrl {
    constructor() {
        this.jsonDataReader = new JsonDataReader();
    }

    getCurrentURL(endPoints) {
        const apiPath = this.jsonDataReader.getString('api_path');
        return apiPath + endPoints;
    }

}export default GetUrl;