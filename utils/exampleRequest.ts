const { responseData, loading, error } = useFetch("https://example.com/api/resource", "GET");
const { responseData, loading, error } = useFetch("https://example.com/api/resource", "POST", postData);
const { responseData, loading, error } = useFetch("https://example.com/api/resource/{id}", "PUT", newData);
const { responseData, loading, error } = useFetch("https://example.com/api/resource/{id}", "DELETE");