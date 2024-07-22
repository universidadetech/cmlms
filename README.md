# Community Manager LMS

Community Manager LMS is a Learning Management System designed to help communities manage educational content and user engagement effectively.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (for the MySQL database)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/universidadetech/cmlms.git
    cd cmlms
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Configuration

Modify the following files to suit your environment:
- `app/page.tsx`
- `next.config.js`
- `tailwind.config.js`
- `tsconfig.json`

### Running the Project

- To start the development server:
    ```sh
    npm run dev
    ```

- To build the project for production:
    ```sh
    npm run build
    ```

- To start the production server:
    ```sh
    npm start
    ```

### Docker (for MySQL Database Only)

To set up and run the MySQL database using Docker:

1. Build the Docker image for the database:
    ```sh
    docker-compose build
    ```

2. Run the Docker container for the database:
    ```sh
    docker-compose up
    ```

## Project Structure

- `actions/`: Contains action-related functions.
- `app/`: Main application directory.
- `components/`: Reusable components.
- `hooks/`: Custom hooks.
- `lib/`: Utility functions and libraries.
- `prisma/`: Prisma ORM configuration.
- `public/`: Public assets and static files.
- `scripts/`: Custom scripts.
- `styles/`: Global styles.

## Built With

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js & TypeScript

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)