import { BUTTER_API_KEY } from '../butter-api/butter-api-key';

const urlPosts = "https://api.buttercms.com/v2/posts/";
const urlSearch = "https://api.buttercms.com/v2/search/";
const auth_token = 'auth_token=' + BUTTER_API_KEY;

export async function fetchOneBlogPost() {
  return await fetch(urlPosts + '?' + auth_token)
    .then(res => res.json())
    .then(resp => {
      if (resp.data.length > 0) {
        return resp.data[0];
      }
      return null;
    })
    .catch(resp => {
      console.log(resp);
      return null;
    });
} 

export async function fetchBlogPosts() {
  return await fetch(urlPosts + '?' + auth_token)
    .then(res => res.json())
    .then(resp => {
      return resp;
    })
    .catch(resp => {
      console.log(resp);
      return null;
    });
} 

export async function fetchFilteredPosts(slug: string, page: number, pageSize: number, excludeBody: boolean) {
  const slugKey = encodeURIComponent(slug);
  const query = '?page=' + page + '&page_size=' + pageSize + '&exclude_body=' + excludeBody + '&category_slug=' + slugKey + '&';
  console.log(urlPosts + query + auth_token)
  return await fetch(urlPosts + query + auth_token)
    .then(res => res.json())
    .then(resp => resp.data)
    .catch(resp => {
      console.log(resp);
      return null;
    })
}

export async function fetchSearchPosts(search: string, page: number, pageSize: number) {
  const searchKey = encodeURIComponent(search);
  console.log(searchKey);
  const query = '?page=' + page + '&page_size=' + pageSize + '&query=' + searchKey + '&';
  return await fetch(urlSearch + query + auth_token)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    })
}

export async function fetchPostContent(page: number, pageSize: number, excludeBody: boolean) {
  const query = '?page=' + page + '&page_size=' + pageSize + '&exclude_body=' + excludeBody + '&';
  return await fetch(urlPosts + query + auth_token)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    })
}

export async function fetchPostWithSlug(slug: string) {
  return await fetch(urlPosts + slug + '/?' + auth_token)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    })
}