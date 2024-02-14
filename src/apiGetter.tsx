import axios from 'axios';

export const getFromApi = (url: string, setter: Function) => {
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      setter(res.data.story.content);
    })
    .catch(({ message }: { message: string }) => {
      console.log(message);
    });
};
