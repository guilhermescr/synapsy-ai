import { render, screen } from '@testing-library/react';
import LandingPage from '@/src/app/(landing)/page';

describe('LandingPage', () => {
  it('renders the Header and Footer', () => {
    render(<LandingPage />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the Hero section', () => {
    render(<LandingPage />);

    expect(
      screen.getByText(/Unlock AI-Powered Insights to Drive/i)
    ).toBeInTheDocument();
  });

  it('renders the Features section', () => {
    render(<LandingPage />);

    const featuresHeading = screen.getByRole('heading', { name: /Features/i });
    expect(featuresHeading).toBeInTheDocument();
  });

  it('renders the Security section', () => {
    render(<LandingPage />);

    const securityHeading = screen.getByRole('heading', { name: /Security/i });
    expect(securityHeading).toBeInTheDocument();
  });

  it('renders the Our Team section', () => {
    render(<LandingPage />);

    const ourTeamHeading = screen.getByRole('heading', {
      name: /Meet our team/i,
    });
    expect(ourTeamHeading).toBeInTheDocument();
  });

  it('renders the Join Community section', () => {
    render(<LandingPage />);

    const joinCommunityHeading = screen.getByRole('heading', {
      name: /Join the community/i,
    });
    expect(joinCommunityHeading).toBeInTheDocument();
  });

  it('renders the navigation links in the Header', () => {
    render(<LandingPage />);

    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
    expect(navLinks.some((link) => link.textContent === 'Features')).toBe(true);
  });

  it('renders the "Book a Demo" button in the Header', () => {
    render(<LandingPage />);

    const demoButtons = screen.getAllByRole('button', { name: /Book a Demo/i });
    expect(demoButtons[0]).toBeInTheDocument();
  });
});
