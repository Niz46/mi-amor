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
  ImageBackground,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import CountdownTimer from "../components/CountdownTimer";
import AnimatedFeatureCard from "../components/AnimatedFeatureCard";
import FAQSection from "../components/FAQSection";
import HeroVideo from "../components/HeroVideo";
import TopSafeShade from "../components/TopSafeShade";

const { width } = Dimensions.get("window");

/* Slider images */
const sliderImages = [
  require("../../assets/images/slider1.jpeg"),
  require("../../assets/images/slider2.jpeg"),
  require("../../assets/images/slider3.jpeg"),
  require("../../assets/images/slider4.jpeg"),
  require("../../assets/images/slider5.jpeg"),
];

/* FEATURES (icons use FontAwesome names from AnimatedFeatureCard) */
const FEATURES = [
  {
    iconName: "bolt",
    title: "Rapid Daily Payouts",
    subtitle:
      "Collect earnings every 24 hours — no lock-ups, no paperwork, just instant cash straight to your wallet.",
  },
  {
    iconName: "graduation-cap",
    title: "Skill Boost Academy",
    subtitle:
      "Bite-size lessons in content strategy, affiliate growth, and money management — earn badges and unlock higher-paying tasks as you level up.",
  },
  {
    iconName: "users",
    title: "Thriving Community Network",
    subtitle:
      "Join a continent-wide tribe of promoters, creators, and founders. Launch joint campaigns, climb leaderboards, and swap winning tactics for shared growth.",
  },
  {
    iconName: "share-alt",
    title: "Viral Referral Engine",
    subtitle:
      "Share your link, grow the network, and amplify your income with tiered bonuses on every new member you bring in.",
  },
  {
    iconName: "mobile",
    title: "Instant One-Tap Payouts",
    subtitle:
      "Move your money to any bank or crypto wallet in seconds — 24/7, worldwide, with zero waiting time.",
  },
];

/* FAQ items */
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
  {
    question: "Where is Mi Amor available?",
    answer:
      "Worldwide 🌍. We support 150+ local payout options and major cryptocurrencies.",
  },
];

export default function HomeScreen({ navigation }) {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const heroVideoSize = Math.min(Math.round(width * 0.65), 260);

  return (
    <SafeAreaView style={styles.container}>
      <TopSafeShade color="rgba(0,0,0,0.95)" />
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {/* ---------- HERO ---------- */}
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
            Mi Amor is a social media platform where lovers connect, share, and
            grow in meaningful ways. Beyond relationships, it's also a space to
            work, collaborate, and earn directly to your bank account. Join a
            global community where love and opportunity come together.
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

        {/* ---------- SLIDER ---------- */}
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

        {/* ---------- FEATURES ---------- */}
        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why Choose Mi Amor</Text>

          {(() => {
            const GAP = 16;
            const horizontalPadding = 25;
            const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
            const itemWidth = Math.floor(
              (width - horizontalPadding - GAP * (columns - 1)) / columns
            );

            return (
              <View style={[styles.cardRow, { marginHorizontal: -8 }]}>
                {FEATURES.map((f, i) => (
                  <View
                    key={i}
                    style={{
                      width: itemWidth,
                      paddingHorizontal: 8,
                      marginBottom: 12,
                    }}
                  >
                    <AnimatedFeatureCard
                      iconName={f.iconName}
                      title={f.title}
                      subtitle={f.subtitle}
                    />
                  </View>
                ))}
              </View>
            );
          })()}
        </View>

        {/* ---------- HOW IT WORKS ---------- */}
        <View style={{ marginTop: 20 }}>
          <LinearGradient
            colors={["#0057e1", "#002b63"]}
            style={styles.howGradient}
          >
            <Text style={styles.howHeading}>How It Works</Text>

            {(() => {
              const STEPS = [
                {
                  step: "1",
                  title: "Join in Seconds",
                  text: "Create a free account with your phone or email — no long forms, no KYC delays.",
                },
                {
                  step: "2",
                  title: "Unlock Daily Tasks",
                  text: "Browse AI-curated activities you already enjoy — chat, share, or learn — and rack up points fast.",
                },
                {
                  step: "3",
                  title: "Cash-Out Anytime",
                  text: "Transfer your earnings instantly to any local bank, PayPal, or crypto wallet — 24/7.",
                },
              ];

              const GAP = 16;
              const horizontalPadding = 40;
              const columns = width >= 900 ? 3 : width >= 600 ? 3 : 1;
              const itemWidth = Math.floor(
                (width - horizontalPadding - GAP * (columns - 1)) / columns
              );

              return (
                <View style={[styles.howGrid, { marginHorizontal: -8 }]}>
                  {STEPS.map((st, i) => (
                    <View
                      key={i}
                      style={{
                        width: itemWidth,
                        paddingHorizontal: 8,
                        marginBottom: 12,
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.howStep}>
                        <Text style={styles.howStepNumber}>{st.step}</Text>
                        <Text style={styles.howStepTitle}>{st.title}</Text>
                        <Text style={styles.howStepText}>{st.text}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              );
            })()}
          </LinearGradient>
        </View>

        {/* ---------- CTA BAND (signup) ---------- */}
        <View style={styles.ctaBand}>
          <Text style={styles.ctaBandHeading}>
            Ready to earn your first ₦ today?
          </Text>

          <Text style={styles.ctaBandCopy}>
            Join thousands already earning with Mi Amor. It takes less than a
            minute to start.
          </Text>

          <TouchableOpacity
            activeOpacity={0.92}
            onPress={() => navigation.navigate("Register")}
            style={styles.ctaPrimaryBtn}
          >
            <Text style={styles.ctaPrimaryBtnText}>Create My Account</Text>
          </TouchableOpacity>
        </View>

        {/* ---------- FAQ ---------- */}
        <FAQSection items={FAQS} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

/* -------------------- STYLES -------------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8ff" },

  /* HERO */
  hero: {
    alignItems: "center",
    padding: 22,
    backgroundColor: "#0057e1",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logo: { width: 140, height: 76, marginBottom: 8 },
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
    maxWidth: 720,
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

  /* SLIDER */
  sliderWrap: { marginTop: 18 },
  slideImage: { height: 200, borderRadius: 14, marginRight: 16 },

  /* FEATURES */
  features: { paddingHorizontal: 20, marginTop: 18 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  /* HOW IT WORKS */
  howGradient: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
  howHeading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },
  howGrid: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  howStep: {
    backgroundColor: "transparent",
    alignItems: "center",
    padding: 8,
  },
  howStepNumber: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "900",
    marginBottom: 6,
  },
  howStepTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
    textAlign: "center",
  },
  howStepText: {
    color: "rgba(255,255,255,0.92)",
    textAlign: "center",
    lineHeight: 18,
    fontSize: 14,
    maxWidth: 320,
  },

  /* CTA BAND */
  ctaBand: {
    marginTop: 18,
    marginHorizontal: 20,
    backgroundColor: "#ffd041",
    paddingVertical: 28,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 4,
  },
  ctaBandHeading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
    color: "#001529",
    textAlign: "center",
    marginBottom: 8,
  },
  ctaBandCopy: {
    color: "#001529",
    textAlign: "center",
    maxWidth: 720,
    marginBottom: 16,
    opacity: 0.95,
  },
  ctaPrimaryBtn: {
    backgroundColor: "#001529",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 3,
  },
  ctaPrimaryBtnText: {
    color: "#ffd041",
    fontWeight: "800",
    fontSize: 16,
  },
});
