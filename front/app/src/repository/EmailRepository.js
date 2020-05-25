import Repository from '@/repository/Repository';
const resource = '/emails';

export default {
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
};