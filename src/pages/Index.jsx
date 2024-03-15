import React from "react";
import { Box, Heading, Text, Flex, Image, Button, IconButton, Stack, Link, Divider } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaAmazon, FaSpotify, FaApple } from "react-icons/fa";

const Index = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/yourusername" },
    { icon: FaInstagram, url: "https://www.instagram.com/yourusername" },
    { icon: FaYoutube, url: "https://www.youtube.com/yourusername" },
    { icon: FaAmazon, url: "https://www.amazon.com/yourusername" },
    { icon: FaSpotify, url: "https://open.spotify.com/artist/yourusername" },
    { icon: FaApple, url: "https://music.apple.com/us/artist/yourusername" },
  ];

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" p={4} bg="gray.800" color="white">
        <Heading as="h1" size="lg">
          Your Name
        </Heading>
        <Stack direction="row" spacing={4}>
          {socialLinks.map(({ icon: Icon, url }) => (
            <Link key={url} href={url} isExternal>
              <IconButton icon={<Icon />} variant="ghost" />
            </Link>
          ))}
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Flex direction="column" align="center" justify="center" h="50vh" bgImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzEwNDY1MjY5fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white" textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to My Music Portfolio
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover my latest releases, playlists, and upcoming events.
        </Text>
        <Button colorScheme="blue" size="lg">
          Browse Music
        </Button>
      </Flex>

      {/* Featured Content */}
      <Box p={8}>
        <Heading as="h3" size="xl" mb={4}>
          Featured Content
        </Heading>
        {/* Horizontal Slides Gallery */}
        <Flex overflowX="auto" mb={8}>
          {[1, 2, 3, 4].map((item) => (
            <Box key={item} minW="300px" mr={4}>
              <Image src={`https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwJTI0JTdCaXRlbSU3RHxlbnwwfHx8fDE3MTA0NjUyNzB8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Album ${item}`} />
              <Text mt={2} fontWeight="bold">
                Album {item}
              </Text>
            </Box>
          ))}
        </Flex>
        <Divider />
      </Box>

      {/* Sections */}
      <Stack spacing={8} p={8}>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Browse Music
          </Heading>
          <Text>Explore music by genre, artist, or other criteria.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Playlists
          </Heading>
          <Text>Create and manage your playlists.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Artists
          </Heading>
          <Text>Discover artist profiles, biographies, and discographies.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Events/Tours
          </Heading>
          <Text>Find information about live concerts, tours, and music events.</Text>
        </Box>
      </Stack>

      {/* Footer */}
      <Flex as="footer" align="center" justify="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
