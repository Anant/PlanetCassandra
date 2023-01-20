import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Card, Col, Row } from 'antd';
import { Container, Grid } from '@mui/material';

interface Props {
    tag: string;
    posts: {
        title: string;
    }[];
}


const TagPosts: React.FC<Props> = ({ tag, posts }) => {


    return (
        <Container>
            <Grid container>
                {posts.map(post => (
                    <Grid item xs={4} key={post.title}>
                        <Card title={post.title} bordered={false} style={{ width: 300 }}>
                            <p>Content</p>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TagPosts;