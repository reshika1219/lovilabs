import { sanityClient } from './sanity';

export async function getTeamMembers() {
  if (!sanityClient) {
    return [];
  }

  try {
    const members = await sanityClient.fetch(
      '*[_type == "teamMember" && active == true] | order(order asc) { name, role, initials, linkedin, image }'
    );

    return members;
  } catch {
    return [];
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
