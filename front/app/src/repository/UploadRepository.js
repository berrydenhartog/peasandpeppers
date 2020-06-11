import Repository from '@/repository/Repository';
const resource = '/uploads';

export default {
    upload(payload) {
        return Repository.post(`${resource}`, payload,{ 
          timeout: 60000,  
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          });
    },
    list() {
      return Repository.get(`${resource}`);
  },
};