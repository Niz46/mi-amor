// src/screens/HomeScreen.js
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import CountdownTimer from "../components/CountdownTimer";
import AnimatedFeatureCard from "../components/AnimatedFeatureCard";
import FAQSection from "../components/FAQSection";
import HeroVideo from "../components/HeroVideo";

const { width } = Dimensions.get("window");
const sliderImages = [
  require("../../assets/images/slider1.jpeg"),
  require("../../assets/images/slider2.jpeg"),
  require("../../assets/images/slider3.jpeg"),
  require("../../assets/images/slider4.jpeg"),
  require("../../assets/images/slider5.jpeg"),
];

const FEATURES = [
  {
    title: "Rapid Daily Payouts",
    subtitle: "Collect earnings every 24 hours — no paperwork.",
  },
  {
    title: "Skill Boost Academy",
    subtitle: "Learn bite-size skills and unlock better tasks.",
  },
  {
    title: "Thriving Community",
    subtitle: "Creators, promoters and founders collaborating.",
  },
];

const FAQS = [
  {
    question: "How do I earn on Mi Amor?",
    answer:
      "Complete daily tasks, invite friends, and level up to unlock better payouts.",
  },
  {
    question: "Is Mi Amor free to join?",
    answer:
      "Yes. Creating an account is free; certain premium campaigns may require a fee.",
  },
  {
    question: "How fast can I withdraw?",
    answer:
      "Withdrawals are instant or within a few minutes depending on the method.",
  },
];

export default function HomeScreen({ navigation }) {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // responsive video size — won't exceed 260, but scales down on small screens
  const heroVideoSize = Math.min(Math.round(width * 0.65), 260);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        <View style={[styles.hero, { zIndex: 2 }]}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <HeroVideo
            source={require("../../assets/videos/hero.mp4")}
            size={heroVideoSize}
            scrollY={scrollY}
            style={{ marginVertical: 12, zIndex: 0, opacity: 0.98 }}
          />

          <Text style={styles.title}>
            Earn Smarter with Mi Amor — Where Connections Meet Cashflow
          </Text>
          <Text style={styles.subtitle}>
            Join a global community to love, collaborate and earn — withdrawals
            24/7.
          </Text>

          <View style={styles.ctaRow}>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.primaryBtnText}>Get Started Free</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => navigation.navigate("Contact")}
            >
              <Text style={styles.secondaryBtnText}>Contact Us</Text>
            </TouchableOpacity>
          </View>

          <CountdownTimer initialSeconds={3 * 24 * 3600} />
        </View>

        <View style={styles.sliderWrap}>
          <FlatList
            data={sliderImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(_, i) => String(i)}
            renderItem={({ item }) => (
              <Animated.Image
                source={item}
                style={[styles.slideImage, { width: width - 48 }]}
                resizeMode="cover"
              />
            )}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          />
        </View>

        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why Choose Mi Amor</Text>
          <View style={styles.cardRow}>
            {FEATURES.map((f, i) => (
              <AnimatedFeatureCard
                key={i}
                title={f.title}
                subtitle={f.subtitle}
              />
            ))}
          </View>
        </View>

        <View style={styles.ctaBand}>
          <Text style={styles.ctaBandText}>
            Ready to earn your first ₦ today?
          </Text>
          <TouchableOpacity
            style={styles.ctaBandBtn}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#001529", fontWeight: "800" }}>
              Create My Account
            </Text>
          </TouchableOpacity>
        </View>

        <FAQSection items={FAQS} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8ff" },
  hero: {
    alignItems: "center",
    padding: 22,
    backgroundColor: "#0057e1",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logo: { width: 120, height: 36, marginBottom: 12 },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "rgba(255,255,255,0.95)",
    textAlign: "center",
    maxWidth: 680,
    marginBottom: 16,
  },
  ctaRow: { flexDirection: "row", marginBottom: 14 },
  primaryBtn: {
    backgroundColor: "#ffd041",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 26,
    marginRight: 12,
  },
  primaryBtnText: { fontWeight: "800", color: "#001529" },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 26,
  },
  secondaryBtnText: { color: "#fff", fontWeight: "700" },
  sliderWrap: { marginTop: 18 },
  slideImage: { height: 200, borderRadius: 14, marginRight: 16 },
  features: { paddingHorizontal: 20, marginTop: 18 },
  sectionTitle: { fontSize: 20, fontWeight: "800", marginBottom: 12 },
  cardRow: { flexDirection: "row", justifyContent: "space-between" },
  ctaBand: {
    marginTop: 18,
    marginHorizontal: 20,
    backgroundColor: "#ffd041",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaBandText: { fontWeight: "700", marginBottom: 8, color: "#001529" },
  ctaBandBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
