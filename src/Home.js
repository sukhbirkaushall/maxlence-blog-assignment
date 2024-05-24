import React, { useState } from 'react';
import blogsData from './blogs.json';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsinPage = 10; //no of blogs in a page

    const handleLikeClick = (event) => {
        event.target.style.backgroundColor = "red";
    };

    const handleCommentClick =() =>{
        prompt('write your comment')
    }

    const lastBlog = currentPage * blogsinPage;
    const firstBlog = lastBlog - blogsinPage;
    const currentBlogs = blogsData.slice(firstBlog, lastBlog);
    const pages = (pageNumber) => setCurrentPage(pageNumber);

    return (

        // to show the blogs on the home page
        <div className="home-container">
            <h1 className="welcome-heading">Welcome to the Blog</h1>
            <div className="blog-list">
                {currentBlogs.map((blog) => (
                    <div className="blog-item" key={blog.id}>
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-content">{blog.content}</p>
                        <p className="blog-details">
                            <strong className="blog-author">Author:</strong> {blog.author}
                        </p>
                        <p className="blog-details">
                            <strong className="blog-date">Date:</strong> {blog.date}
                        </p>
                        <button className="like-button" onClick={handleLikeClick}>Like</button>
                        <button className="comment-button" onClick={handleCommentClick}>Comment</button>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <ul className="pagination">
                {Array.from({ length: Math.ceil(blogsData.length / blogsinPage) }).map((_, index) => (
                    <li key={index}
                     className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => pages(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
