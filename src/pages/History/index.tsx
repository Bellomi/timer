import { HistoryContainer, HistoryList, Status } from "./styles";

export const History = () => {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project 1</td>
              <td>25 minutes</td>
              <td>10 days ago</td>
              <td>
                <Status status="green">Finished</Status>
              </td>{" "}
            </tr>
            <tr>
              <td>Project 2</td>
              <td>50 minutes</td>
              <td>5 days ago</td>
              <td>
                <Status status="yellow">Ongoing</Status>
              </td>{" "}
            </tr>
            <tr>
              <td>Project 3</td>
              <td>30 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status status="red">Canceled</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
