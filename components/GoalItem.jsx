import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, deleteGoal }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: "#dddddd" }} onPress={deleteGoal}>
                <Text style={styles.goalText}>{item}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        padding: 8,
        color: "white",
    },
});