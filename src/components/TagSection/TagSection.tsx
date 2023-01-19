import React, { useState } from 'react';
import { Grid, Typography, Container, Button, Card, CardContent } from '@mui/material'
import './tagStyles.css';


interface Props {
    tags: string[];
    data: {
        id: string;
        title: string;
        tag: string;
    }[];
}

const TagSection: React.FC<Props> = ({ tags, data }) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(tags[0]);

    const handleClick = (tag: string) => {
        setSelectedTag(tag);
    };

    const filteredData = selectedTag
        ? data.filter(d => d.tag === selectedTag)
        : data;

    return (
        <Container>
            <Grid>
                {tags.map(tag => (
                    <Button
                        key={tag}
                        onClick={() => handleClick(tag)}
                        className={selectedTag === tag ? `selected` : ''}
                    >
                        {tag}
                    </Button>
                ))}
            </Grid>
            <Grid>
                {filteredData.map(d => (
                    <Card key={d.id}>
                        <CardContent>
                            <h2>{d.title}</h2>
                            <p>Tag: {d.tag}</p>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
};

export default TagSection;