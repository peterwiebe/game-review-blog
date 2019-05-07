import React from 'react'
import {Form} from 'semantic-ui-react'
import './styles.scss'

const PostForm = () => {
    return (
        <Form>
            <Form.Input required label='Title' placeholder='Apex 9/10'/>

            <Form.TextArea required label='Body' placeholder='Easy to get into, hard to master'/>

            <Form.Input required label='Author Name' placeholder='CoconutMaster42'/>

            <Form.Button type='submit'>Create Blog Post</Form.Button>
        </Form>
    )
}

export default PostForm
