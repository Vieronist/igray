import { useState } from 'react';
import { Card, Image, Modal, SimpleGrid } from '@mantine/core';

const Gallery = ({ images }: { images: string[] }) => {
  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleClick = (image: string) => {
    setSelectedImage(image);
    setOpened(true);
  };

  return (
    <>
      <SimpleGrid
        m="0 auto 50px"
        cols={{ base: 1, sm: 2, lg: 5 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
        mb={50}
      >
        {images?.map((image, index) => (
          <Card onClick={() => handleClick(image)} style={{ height: '150px', width: '150px' }}>
            <Image
              mr={5}
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ cursor: 'pointer' }}
            />
          </Card>
        ))}
      </SimpleGrid>
      <Modal centered size="xl" opened={opened} onClose={() => setOpened(false)}>
        <Image src={selectedImage} />
      </Modal>
    </>
  );
};

export default Gallery;
