import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__content">
        <span className="overline">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have moved.</p>
        <div className="not-found__actions">
          <Button href="/" variant="primary">Back Home</Button>
          <Link href="/contact" className="not-found__link">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}