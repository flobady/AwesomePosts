import axios from 'axios';
import { Config } from '../Config';

export default axios.create({
	baseURL: Config.API_URL
})