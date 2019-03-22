import React from 'react'
import Layout from './components/Layout';
import Todo from './components/Todo';

const index = () => {
  return (
    <div>
      <Layout>
            <div>
                <h1>Welcome To Jude's Todo App </h1>
                <p> Add your chores and tick them good if its completed or not</p>
                <Todo />
            </div>
        </Layout>
    </div>
  )
}

export default index
