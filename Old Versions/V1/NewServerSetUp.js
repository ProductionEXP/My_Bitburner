/** @param {NS} ns */
export async function main(ns) {
    var des = ns.args[0];
    var files = ["Grow_V2.js", "Full_V2.js", "Weaken_V2.js", "Setup_F.js", "Mulit_Setup.js", "EMG_G.js", "EMG_W.js", "EMG_Start.js",];
    var files2 = ["NewServer.js", "NewServerSetUp.js", "PortsNNuke.js", "StartUp_SA.js"];
    ns.scp(files, des, "home");
    ns.scp(files2, des, "home");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3U2VydmVyU2V0VXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTmV3U2VydmVyU2V0VXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCLE1BQU0sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEVBQUU7SUFFNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQ2hJLElBQUksTUFBTSxHQUFFLENBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUVqRixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLENBQUMifQ==