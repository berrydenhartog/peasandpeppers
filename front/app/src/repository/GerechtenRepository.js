import Repository from '@/repository/Repository';
const resource = '/gerechten';

export default {
    get(id) {
        return Repository.get(`${resource}/${id}`);
    },
    add(id, payload) {
        return Repository.post(`${resource}/${id}`, payload);
    },
};