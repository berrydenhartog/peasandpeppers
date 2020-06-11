import Repository from '@/repository/Repository';
const resource = '/uploads';

export default {
    upload(payload) {
        return Repository.post(`${resource}`, payload,{ timeout: 29000});
    },
};