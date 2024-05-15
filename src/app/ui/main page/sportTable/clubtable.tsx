import { fetchClubTable } from "@/lib/data";
import { clubtable } from "@/lib/definition";
import { table } from "console";
import Image from "next/image";
export default async function ClubTable() {
  const allClubs = await fetchClubTable();
  const sortedClubes = allClubs.sort((item) => item.pts);
  allClubs.find((item) => item.pts === 83)?.club;
  return (
    <div className="z-50 bg-White p-4 rounded-xl">
      <table className="club_table table-auto">
        <thead>
          <tr className="text-left">
            <th className="pr-16">Club</th>
            <th>Gp</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>A</th>
            <th>GD</th>
            <th className="ptsrow">Pts</th>
          </tr>
        </thead>
        <tbody className="striped">
          {Array.from({ length: 6 }, (_, i) => (
            <tr key={i}>
              <td className="flex flex-row gap-2 pr-16 pl-2 py-2">
                {`${i + 1}`}
                <div className="relative w-6">
                  {
                    <Image
                      alt="team"
                      src={`/team/${sortedClubes[i].src}`}
                      fill
                      className="object-cover"
                    />
                  }
                </div>
                {sortedClubes[i].club}
              </td>
              <td>{sortedClubes[i].gp}</td>
              <td>{sortedClubes[i].w}</td>
              <td>{sortedClubes[i].d}</td>
              <td>{sortedClubes[i].l}</td>
              <td>{sortedClubes[i].a}</td>
              <td>{sortedClubes[i].gd}</td>
              <td>{sortedClubes[i].pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
