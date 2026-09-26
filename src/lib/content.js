import { sanityClient } from './sanity';

const FALLBACK_TEAM = [
  { name: 'Team Member', role: 'Role Title', initials: 'TM', linkedin: '#' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM', linkedin: '#' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM', linkedin: '#' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM', linkedin: '#' },
];

export async function getTeamMembers() {
  if (!sanityClient) {
    return FALLBACK_TEAM;
  }

  try {
    const members = await sanityClient.fetch(
      '*[_type == "teamMember" && active == true] | order(order asc) { name, role, initials, linkedin, image }'
    );

    return members.length ? members : FALLBACK_TEAM;
  } catch {
    return FALLBACK_TEAM;
  }
}

export async function getProjects() {
  if (!sanityClient) {
    return [];
  }

  try {
    return await sanityClient.fetch(
      '*[_type == "project" && published == true] | order(order asc) { title, category, summary, url, image }'
    );
  } catch {
    return [];
  }
}
