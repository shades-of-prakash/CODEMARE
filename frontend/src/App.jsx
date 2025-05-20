import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/Layouts/MainLayout";
function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route
							index
							element={<div className="bg-red-300">This is Home dude</div>}
						/>
						<Route
							path="popular"
							element={
								<div className="bg-green-900 custom-class">This is home in Main layout</div>
							}
						/>
					</Route>
					<Route path="/login" element={<div>Login Page babe</div>} />
					<Route path="*" element={<div>404 - Page Not Found</div>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
