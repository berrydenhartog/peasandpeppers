import Repository from '@/repository/Repository';
const resource = '/bestel';

export default {
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
};