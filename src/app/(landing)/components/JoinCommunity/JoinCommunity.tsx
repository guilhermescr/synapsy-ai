import Wrapper from '@/src/components/layout/Wrapper/Wrapper';
import Button from '@/src/components/ui/Button';
import './join-community.css';
import { DiscordIcon } from '@/src/components/icons/SocialIcons';

export default function JoinCommunity() {
  return (
    <Wrapper>
      <section className="flex flex-col items-center justify-center text-center my-32">
        <div className="join-community-card bg-cover! lg:bg-contain! rounded-md flex flex-col gap-5 items-center justify-center py-10 px-4 w-full">
          <DiscordIcon color="text-icon-secondary" className="w-10 md:w-16.5" />

          <h2 className="font-bold text-2xl md:text-4xl">Join the community</h2>
          <p className="max-w-md text-secondary">
            Join our 400,000+ person community and contribute to a more private
            and decentralized internet. Start for free.
          </p>

          <Button size="large">Join Discord</Button>
        </div>
      </section>
    </Wrapper>
  );
}
