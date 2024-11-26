import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);

  const deleteGoalHandler = (key) => {
    setCourseGoals(courseGoals.filter((_, index) => index !== key));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={() => setShowNewGoalModal(true)}
        />
        {showNewGoalModal && (
          <GoalInput
            setCourseGoals={setCourseGoals}
            closeModal={() => setShowNewGoalModal(false)}
            showModal={showNewGoalModal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => (
              <GoalItem
                key={index}
                item={item}
                deleteGoal={() => deleteGoalHandler(index)}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
