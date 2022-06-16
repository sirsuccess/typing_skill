import Head from "next/head";

export default function NotFound() {
  return (
    <div className="container">
      <main>
        <h1 className="text">Page not found</h1>

        <p className="description">
          Go back to <a href="/">home</a>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .text {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .text {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
