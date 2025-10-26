import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
    return (
        <main className="main">
            <section className="intro">
                <h1 className="title">React Guided Inquiry Week 3</h1>
                <p className="subtitle">
                    The goal of this project is to get more experience working
                    with React. This project features 3 problems that you can
                    navigate to in the navbar.
                </p>
            </section>
            <section className="problems">
                <div>
                    EASY: Create a simple counter app using React hooks.
                    Implement the buttons to Increment and Decrement in the
                    counter value
                </div>
                <div>
                    MEDIUM: Program a movie search app with React hooks and
                    React Router. Utilize an API to fetch movie data based on
                    user search queries. Display search results and implement a
                    detailed view for each movie.
                </div>
                <div>
                    HARD: Develop a to-do list app with React hooks and React
                    Router. Implement features like adding, editing, and
                    deleting tasks. Use React Router to navigate between
                    different pages, such as a task list and a task detail page.
                </div>
            </section>
        </main>
    );
}
