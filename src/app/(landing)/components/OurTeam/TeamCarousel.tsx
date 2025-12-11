'use client';

import Image, { StaticImageData } from 'next/image';
import TeamPerson1 from '@/public/images/team/team-person-1.png';
import TeamPerson2 from '@/public/images/team/team-person-2.png';
import TeamPerson3 from '@/public/images/team/team-person-3.png';
import TeamPerson4 from '@/public/images/team/team-person-4.png';
import TeamPerson5 from '@/public/images/team/team-person-5.png';
import TeamPerson6 from '@/public/images/team/team-person-6.png';
import TeamPerson7 from '@/public/images/team/team-person-7.png';
import clsx from 'clsx';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from '@/src/components/icons/SocialIcons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, User2 } from 'lucide-react';
import CarouselButton from '@/src/components/ui/CarouselButton';

type TeamMember = {
  image: StaticImageData | null;
  name: string;
  role: string;
  testimonial: string;
};

function TeamMemberPlaceholder() {
  return (
    <div className="rounded-full h-40 w-40 bg-header border border-icon flex items-center justify-center">
      <User2 size={70} />
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, testimonial } = member;

  return (
    <section className="bg-header rounded-2xl flex flex-col items-center justify-center py-8 px-5 md:px-24 relative max-w-4xl w-full">
      <p className="max-w-[690px] mb-8 tracking-wide">{testimonial}</p>

      <h3 className="text-primary font-semibold">{name}</h3>
      <p className="mt-1 mb-2 text-muted">{role}</p>
      <div className="flex items-center gap-5">
        <Link href="#" className="hover:opacity-90">
          <TwitterIcon />
        </Link>

        <Link href="#" className="hover:opacity-90">
          <FacebookIcon />
        </Link>

        <Link href="#" className="hover:opacity-90">
          <LinkedinIcon />
        </Link>
      </div>

      <div className="bg-header aspect-square p-10 absolute -bottom-8 -rotate-45 -z-10" />
    </section>
  );
}

export default function TeamCarousel() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectMiddleIndex = (arrayLength: number) => {
    return Math.floor((arrayLength - 1) / 2);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === null
          ? 0
          : prevIndex === 0
          ? team.length - 1
          : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === null
          ? 0
          : prevIndex === team.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      const teamData: TeamMember[] = [
        {
          image: TeamPerson1,
          name: 'John Wick',
          role: 'CEO FutureSphere',
          testimonial:
            'Managing my team became effortless with the tools provided by Synapsy AI.',
        },
        {
          image: TeamPerson2,
          name: 'Jane Doe',
          role: 'CTO FutureSphere',
          testimonial:
            'We automated repetitive tasks and saved countless hours every week.',
        },
        {
          image: TeamPerson3,
          name: 'Alice Smith',
          role: 'CFO FutureSphere',
          testimonial:
            'The insights we gained helped us cut costs and boost revenue significantly.',
        },
        {
          image: TeamPerson4,
          name: 'Bob Johnson',
          role: 'COO FutureSphere',
          testimonial:
            "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn't exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
        },
        {
          image: TeamPerson5,
          name: 'Charlie Brown',
          role: 'CMO FutureSphere',
          testimonial:
            'Our marketing campaigns are now more targeted and effective than ever.',
        },
        {
          image: TeamPerson6,
          name: 'Diana Prince',
          role: 'Lead Designer',
          testimonial:
            'The design process is now streamlined, allowing me to focus on creativity.',
        },
        {
          image: TeamPerson7,
          name: 'Bruce Wayne',
          role: 'Head of Security',
          testimonial:
            'Enhanced security protocols have ensured the safety of our data and systems.',
        },
      ];

      if (teamData.length && teamData.length % 2 === 0) {
        teamData.push({
          image: null,
          name: '',
          role: '',
          testimonial: '',
        });
      }
      setTeam(teamData);

      const middleIndex = selectMiddleIndex(teamData.length);
      setSelectedIndex(middleIndex);
    };
    fetchTeamData();
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 w-full">
      {selectedIndex !== null && (
        <div>
          <TeamMemberCard member={team[selectedIndex]} />
        </div>
      )}

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center overflow-x-auto no-scrollbar pt-18">
          {team.map((person, index) => {
            if (selectedIndex === null) return null;

            const isSelected = selectedIndex === index;
            const middleIndex = selectMiddleIndex(team.length);

            const order =
              (index - selectedIndex + middleIndex + team.length) % team.length;

            const distanceFromMiddle = Math.abs(order - middleIndex);
            const translateY = -(middleIndex - distanceFromMiddle) * 10;
            const zIndex = middleIndex - distanceFromMiddle;

            return person.image ? (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={clsx(
                  'shrink-0 -mx-2.5 cursor-pointer transition-transform duration-200 ease-in-out',
                  isSelected ? 'scale-120' : 'scale-100'
                )}
                style={{
                  order,
                  transform: `translateY(${translateY}px)`,
                  zIndex,
                }}
              >
                <Image
                  className={clsx(
                    'border rounded-full cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary hover:scale-105',
                    isSelected
                      ? 'border-primary h-52 w-52'
                      : 'border-gray-400 h-40 w-40'
                  )}
                  src={person.image}
                  alt={`Team Person ${index + 1}`}
                />
              </div>
            ) : (
              <TeamMemberPlaceholder key={index} />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-4">
        <CarouselButton onClick={handlePrev}>
          <ChevronLeft />
        </CarouselButton>

        <CarouselButton onClick={handleNext}>
          <ChevronRight />
        </CarouselButton>
      </div>
    </section>
  );
}
