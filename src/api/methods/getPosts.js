import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function getPosts() {

    return Api(
        ApiConstants.POSTS,
        null,
        'get',
        null,
    );
}
