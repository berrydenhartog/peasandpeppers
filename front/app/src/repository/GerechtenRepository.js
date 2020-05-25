import Repository from '@/repository/Repository';
const resource = '/gerechten';

export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getPost(id) {
        return Repository.get(`${resource}/${id}`);
    },
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Repository.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Repository.delete(`${resource}/${id}`)
    },
};