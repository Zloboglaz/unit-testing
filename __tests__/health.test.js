import getHealthStatus from "../src/health.js";

describe("getHealthStatus", () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: "Маг", health: 90 })).toBe("healthy");
    expect(getHealthStatus({ name: "Воин", health: 51 })).toBe("healthy");
  });

  test('should return "wounded" for health between 15 and 50 inclusive', () => {
    expect(getHealthStatus({ name: "Маг", health: 50 })).toBe("wounded");
    expect(getHealthStatus({ name: "Маг", health: 15 })).toBe("wounded");
    expect(getHealthStatus({ name: "Маг", health: 30 })).toBe("wounded");
  });

  test('should return "critical" for health < 15', () => {
    expect(getHealthStatus({ name: "Маг", health: 14 })).toBe("critical");
    expect(getHealthStatus({ name: "Маг", health: 0 })).toBe("critical");
    expect(getHealthStatus({ name: "Маг", health: -5 })).toBe("critical");
  });
});
