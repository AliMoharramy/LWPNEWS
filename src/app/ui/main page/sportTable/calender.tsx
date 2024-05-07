import Image from "next/image";

export default function Calender() {
  return (
    <div className="z-50 bg-White p-4 rounded-xl">
      <p className="p-1">May 2024</p>
      <table className="table-fixed calender">
        <thead>
          <tr className="text-Black50">
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-Black50">29</td>
            <td className="text-Black50">30</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>
              <Image
                src="/team/06.png"
                alt="team"
                width={40}
                height={0}
                className="object-cover"
              />
            </td>
            <td>12</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/team/07.png"
                alt="team"
                width={40}
                height={0}
                className="object-cover"
              />
            </td>
            <td>
              <Image
                src="/team/09.png"
                alt="team"
                width={40}
                height={0}
                className="object-cover"
              />
            </td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>
              <Image
                src="/team/04.png"
                alt="team"
                width={40}
                height={0}
                className="object-cover"
              />
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
          </tr>
          <tr>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="text-Black50">1</td>
            <td className="text-Black50">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
