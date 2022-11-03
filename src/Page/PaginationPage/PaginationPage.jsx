import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import { paginate } from "../../utils/paginate";

function PaginationPage() {

    const [posts, setPosts] = useState([]);
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      const getPosts = async () => {
        const { data: res } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res);
      };
      getPosts();
    }, []);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    
    const handleDelete = (post) =>{
      setPosts(posts.filter(p => p.id !== post.id ))
    }
  
    const paginatePosts = paginate(posts, currentPage, pageSize);
  

  return (
    <div className="pagination-page">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th >Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatePosts.map((post) => (
            <tr key={post.id}>
              <td> {post.id} </td>
              <td> {post.title} </td>
              <td style={{padding:"3px 0"}}>
                <button
                  onClick={() => handleDelete(post)}
                  className="button"
                >
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        items={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationPage;
