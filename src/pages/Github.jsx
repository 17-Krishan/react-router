import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
    <h1 className="text-3xl mb-4">
        Github Followers: {data.followers}
    </h1>

    <img
        src={data.avatar_url}
        alt="Git picture"
        className="mx-auto rounded-full"
        width={300}
    />
</div>
  )
}

export default Github

export async function githubInfoLoader() {
    const response = await fetch(
        'https://api.github.com/users/krishan044'
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub data");
    }

    return response.json();
}